import React from "react";
import { LineChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { useDarkMode } from "../../hooks/userDarkMode";
import { getMaxNumber, getMinNumber } from "./ChartUtils";

type TwoLineChartProps = {
  firstValues: number[];
  secundaryValues: number[];
  labelsX: string[];
};

export function TwoLineChart({
  firstValues,
  secundaryValues,
  labelsX,
}: TwoLineChartProps) {
  const paddingR = 90;
  const { theme } = useDarkMode();
  const screenWidth = Dimensions.get("window").width;

  const maxValue = () => {
    let value1 = getMaxNumber(firstValues);
    let value2 = getMaxNumber(secundaryValues);

    if (value1 > value2) return value1;

    return value2;
  };

  const minValue = () => {
    let value1 = getMinNumber(firstValues);
    let value2 = getMinNumber(secundaryValues);

    if (value1 < value2) return value1;

    return value2;
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
        data: firstValues,
        color: () => theme.colors.primary,
      },
      {
        data: secundaryValues,
        color: () => theme.colors.secundary,
      },
      {
        data: [minValue()],
        withDots: false,
      },
      {
        data: [maxValue()],
        withDots: false,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Math.floor(
        paddingR +
          (firstValues.length * (screenWidth - 64 - paddingR)) /
            (firstValues.length - 1)
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
