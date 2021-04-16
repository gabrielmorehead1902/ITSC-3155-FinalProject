import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
df = pd.read_csv('companyGraph.csv')


top_five = []

for i in range(5):
    high_co2 = 0
    high_column = None
    index = 0
    for c in range(len(df.columns)):
        if(c == 0):
            continue
        
        column = df.iloc[:,c:c+1]
        latest_value = float(column.iloc[-1])
        
        if(latest_value > high_co2 and list(column) not in top_five):
            index = c + 1
            high_co2 = latest_value
            high_column = column
    
    top_five.append(list(high_column))
    

print(top_five)





# Ploting
plots = []
for c in df.iloc[:, 1:]:
    fig = go.Scatter(x=df["Year"], y=df[c], name=c)
    plots.append(fig)

fig = go.Figure(data=plots)
fig.show()
