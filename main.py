#! /usr/bin/env python2.7
# -*- coding: utf-8 -*-
from flask import redirect, url_for, \
    render_template, jsonify, request, \
    send_from_directory, Flask
import psycopg2


app = Flask(__name__, instance_relative_config=True)


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/data")
def data():
    connection = psycopg2.connect(host="144.76.40.38", port="1234",
                                  database="yetu", user="energyhack",
                                  password="energyhack")
    cursor = connection.cursor()

    cursor.execute("""SELECT e_metering_tbl.meter_id, e_metering_tbl.metering_ts,
               e_metering_tbl.power_w FROM public.e_metering_tbl WHERE meter_id
               = 46 AND metering_ts > (SELECT MAX(e_metering_tbl.metering_ts)
               FROM public.e_metering_tbl) - interval '1 seconds';""")

    data = cursor.fetchone()

   # data[2] *= is_peak()

    d = {"timestamp": str(data[1]), "consumption": data[2]}
    return jsonify(data=d)




if __name__ == "__main__":
    app.debug = True
    app.run()
