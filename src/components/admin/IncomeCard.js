import MonthCalander from "./MonthCalander";
import { VictoryPie, VictoryAxis, VictoryBar, VictoryTooltip, VictoryChart, VictoryTheme } from "victory";

const IncomeCard = () => {
    const chartData = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 19000 },
        { quarter: 6, earnings: 19000 },
        { quarter: 7, earnings: 19000 },
        { quarter: 8, earnings: 19000 },
        { quarter: 9, earnings: 19000 },
        { quarter: 10, earnings: 19000 },
        { quarter: 11, earnings: 19000 },
        { quarter: 12, earnings: 19000 },
    ];

    return (
        <div className="IncomeCard">
            <div className="IncomeGraphContainer">
                <div className="IncomeCardContainer">
                    <div className="card">
                        <span>Total income</span>
                        <h1>₦120M</h1>
                    </div>

                    <div className="card">
                        <span>Monthly income</span>
                        <h1>₦2.5M</h1>
                    </div>

                    <div className="card">
                        <span>Todays income</span>
                        <h1>₦120K</h1>
                    </div>
                </div>
                <div className="incomeChart">
                   
                <VictoryChart
                        domainPadding={15}
                        labelComponents={<VictoryTooltip/>}
                    >
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            // tickValues={[143, 223, 3345, 4345,452,768,123,8908,234,90,234,78]}
                            tickFormat={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]}
                        />
                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x) => (`$${x / 1000}k`)}
                        />
                        <VictoryBar 
                        width={600}
                          barWidth={25}
                        cornerRadius={13}
                            data={chartData}
                            style={{
                                data: { fill: "#9775fa" },
                                
                            }}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                        />
                    </VictoryChart>
                </div>
            </div>
            <MonthCalander />
        </div>
    );
};

export default IncomeCard;
