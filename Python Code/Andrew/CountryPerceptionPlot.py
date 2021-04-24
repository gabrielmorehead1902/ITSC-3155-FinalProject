import plotly.graph_objects as go
import plotly.express as px
import chart_studio.plotly as py
import pandas as pd

data = pd.read_csv("YCOM_2020_Data.csv")

data = data.loc[1:51, ["priority", "priorityOppose"]]

pr_sum = data["priority"].mean()
prop_sum = data["priorityOppose"].mean()
not_sure = 100 - prop_sum - prop_sum

names = ["No", "Yes", "Maybe"]
values = [prop_sum, pr_sum, not_sure]

# Figure out how to color


fig = px.pie(values=values, names=names, title="Public belief that Global Warming is a priority", hole=.6, color = names, color_discrete_map={
                                                                                                                        'No':'#F2545B',
                                                                                                                        'Yes':'#61D095',
                                                                                                                        'Maybe':'#FFC170'})
fig.layout.font.size = 20
fig.update_traces(text=names)
fig.update(layout_showlegend=False)
fig.show()
