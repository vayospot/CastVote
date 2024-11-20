import { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import ProfileImage from "./ProfileImage";
import abbreviateNumber from "@/utils/abbreviateNumber";

const CHART_HEIGHT_RATIO = 3; // Chart takes 1/3 of screen height
const PROFILE_IMAGE_SIZE = 30;
const LABEL_EXTRA_HEIGHT = PROFILE_IMAGE_SIZE + 10; // 10 is padding

const BarChartLabel = ({ imageUrl }) => (
  <View className="items-center">
    <ProfileImage source={imageUrl} size={PROFILE_IMAGE_SIZE} />
  </View>
);

const BarChartTopLabel = ({ value }) => (
  <Text className="mb-1 text-sm font-bold text-default">
    {abbreviateNumber(value)}
  </Text>
);

const prepareChartData = (data) =>
  data.map((item) => ({
    value: item.voteCount,
    frontColor: item.color.frontColor,
    gradientColor: item.color.gradientColor,
    labelComponent: () => <BarChartLabel imageUrl={item.imageUrl} />,
    topLabelComponent: () => <BarChartTopLabel value={item.voteCount} />,
  }));

export default function StatsBarChart({ data, onLoad }) {
  const [parentWidth, setParentWidth] = useState(0);
  const chartHeight = Dimensions.get("window").height / CHART_HEIGHT_RATIO;

  const chartData = prepareChartData(data);

  // Get the maximum value with a 20% margin
  const maxChartValue = Math.ceil(
    Math.max(...chartData.map((item) => item.value)) * 1.2,
  );

  return (
    <ScrollView
      onLayout={(e) => {
        setParentWidth(e.nativeEvent.layout.width);
        onLoad();
      }}
    >
      {parentWidth > 0 && (
        <BarChart
          data={chartData}
          adjustToWidth
          parentWidth={parentWidth}
          height={chartHeight}
          labelsExtraHeight={LABEL_EXTRA_HEIGHT}
          maxValue={maxChartValue}
          hideRules
          hideYAxisText
          yAxisThickness={0}
          xAxisThickness={0}
          barBorderRadius={4}
          showGradient
          isAnimated
          animationDuration={400}
          disablePress
        />
      )}
    </ScrollView>
  );
}
