import React from "react";
import { LineChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { useDarkMode } from "../../hooks/userDarkMode";
import { getMaxNumber, getMinNumber } from "./ChartUtils";

type OneLineChartProps = {
  values: number[];
  labelsX: string[];
};

export function OneLineChart({ values, labelsX }: OneLineChartProps) {
  const paddingR = 90;
  const { theme } = useDarkMode();
  const screenWidth = Dimensions.get("window").width;

  const maxValue = () => {
    return getMaxNumber(values);
  };

  const minValue = () => {
    let min = getMinNumber(values);

    if (min >= 0) return min;

    return 0;
  };

  const chartConfig = {
    color: () => theme.colors.disabled,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
    colors: theme.colors.primary,
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: "11",
    },
    fillShadowGradientToOpacity: 0.3,
  };

  const data = {
    labels: labelsX,
    datasets: [
      {
        data: values,
        color: () => theme.colors.primary,
      },
      {
        data: [maxValue()],
        withDots: false,
      },
      {
        data: [minValue()],
        withDots: false,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Math.floor(
        paddingR +
          (values.length * (screenWidth - 64 - paddingR)) / (values.length - 1)
      )}
      height={150}
      chartConfig={chartConfig}
      bezier
      transparent
      xLabelsOffset={-8}
      yLabelsOffset={8}
      style={{ paddingRight: 35 }}
    />
  );
}
