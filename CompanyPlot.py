import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
from pandas import DataFrame

df = pd.read_csv('companyGraph.csv')

top_five = []
for i in range(10):
    high_co2 = 0
    high_column = None
    
    for c in range(len(df.columns)):   
        if(c == 0):
            continue
        
        column = df.iloc[:,c:c+1]
        column_name = str(column.columns.tolist()[0])
        latest_value = float(column.iloc[-1])
      
        if(latest_value > high_co2 and column_name not in top_five):
            high_co2 = latest_value
            high_column = column
     
    top_five.append(str(high_column.columns.tolist()[0]))


# Plotting
layout = go.Layout(
title='Top 10 Companies releasing Green House Gasses', 
xaxis_title="Years",
yaxis_title="Metric Tons of Carbon Emissions")


plots = []
for h in top_five:
    for c in df.iloc[:, 1:]:
        if(c == h):
            fig = go.Scatter(x=df["Year"], y=df[c], name=c)
            
            plots.append(fig)

fig = go.Figure(data=plots, layout=layout)
fig.show()
