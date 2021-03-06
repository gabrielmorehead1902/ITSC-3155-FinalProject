import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
from pandas import DataFrame
from plotly.offline import plot
import chart_studio
import chart_studio.plotly as py
import chart_studio.tools as tls

username = 'avander7'
api_key = 'poRT8nzcpb2Yt1EVj7aN'
chart_studio.tools.set_credentials_file(username=username, api_key=api_key)


df = pd.read_csv('GlobalLandTemperatures_GlobalTemperatures.csv')

final_points = []
final_dates = []

for index, element in enumerate(df["LandAverageTemperature"]):
    if index % 12 == 0:
        final_points.append(element)

for index, element in enumerate(df["dt"]):
    if index % 12 == 0:
        final_dates.append(element)

data = [go.Scatter(x=final_dates, y=final_points, mode= 'lines', name='Temp')]

layout = go.Layout(
title= 'Global Land Temperatures Over Time',
xaxis_title = 'Date',
yaxis_title = 'Average Temperature')

fig = go.Figure(data = data, layout = layout)
fig.update_yaxes(range=[-5,20])
fig.update_xaxes(range= [-4000000000000,1420000000000])
py.plot(fig, filename = 'global emissions', auto_open=True)
fig.show()