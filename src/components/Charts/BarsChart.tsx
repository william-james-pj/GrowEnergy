import React from "react";
import { BarChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { useDarkMode } from "../../hooks/userDarkMode";
import { getMaxNumber } from "./ChartUtils";

type BarChartProps = {
  values: number[];
  labelsX: string[];
};

export function BarsChart({ values, labelsX }: BarChartProps) {
  const { theme } = useDarkMode();
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    color: () => theme.colors.disabled,
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: "11",
    },
    backgroundGradientFrom: theme.colors.card,
    backgroundGradientTo: theme.colors.card,
    fillShadowGradientFrom: theme.colors.primary,
    fillShadowGradientTo: theme.colors.primary,
    fillShadowGradientFromOpacity: 0.5,
    fillShadowGradientToOpacity: 0.5,
  };

  const data = {
    labels: labelsX,
    datasets: [
      {
        data: values,
      },
      {
        data: [0],
      },
      {
        data: [200],
      },
    ],
  };

  return (
    <BarChart
      data={data}
      width={Math.floor(
        35 + (values.length * (screenWidth - 64 - 35)) / (values.length - 1)
      )}
      height={150}
      fromNumber={getMaxNumber(values)}
      fromZero
      chartConfig={chartConfig}
      xLabelsOffset={-8}
      yLabelsOffset={8}
      yAxisLabel=""
      yAxisSuffix=""
      showValuesOnTopOfBars
      style={{ paddingRight: 35 }}
    />
  );
}
