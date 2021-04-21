import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
from pandas import DataFrame
from plotly.offline import plot

df = pd.read_csv('GlobalLandTemperatures_GlobalTemperatures.csv')

final_points = []
final_dates = []

for index, element in enumerate(df["LandAverageTemperature"]):
    if index % 13 == 0:
        final_points.append(element)

for index, element in enumerate(df["dt"]):
    if index % 13 == 0:
        final_dates.append(element)

data = [go.Scatter(x=final_dates, y=final_points, mode= 'lines', name='Temp')]

layout = go.Layout(
title= 'Global Land Temperatures Over Time',
xaxis_title = 'Date',
yaxis_title = 'Average Temperature')

fig = go.Figure(data = data, layout = layout)
fig.show()