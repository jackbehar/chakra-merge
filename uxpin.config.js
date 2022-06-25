module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: [
          "src/components/aspect-ratio/AspectRatio.tsx",
          "src/components/box/Box.tsx",
          "src/components/center/Center.tsx",
          "src/components/container/Container.tsx",
          "src/components/flex/Flex.tsx",
          "src/components/grid/Grid.tsx",
          "src/components/grid-item/GridItem.tsx",
          "src/components/flex-spacer/FlexSpacer.tsx",
          "src/components/square/Square.tsx",
          "src/components/circle/Circle.tsx",
          "src/components/stack/Stack.tsx",
          "src/components/wrap/Wrap.tsx",
          "src/components/wrap-item/WrapItem.tsx",
        ],
      },
      {
        name: "Forms",
        include: [
          "src/components/button/Button.tsx",
          "src/components/button-group/ButtonGroup.tsx",
          "src/components/checkbox/Checkbox.tsx",
          "src/components/checkbox-group/CheckboxGroup.tsx",
          "src/components/icon-button/IconButton.tsx",
          "src/components/input/Input.tsx",
          "src/components/radio/Radio.tsx",
          "src/components/radio-group/RadioGroup.tsx",
          "src/components/textarea/Textarea.tsx",
        ],
      },
      {
        name: "Data Display",
        include: [
          "src/components/badge/Badge.tsx",
          "src/components/code/Code.tsx",
          "src/components/divider/Divider.tsx",
          "src/components/kbd/Kbd.tsx",
        ],
      },
      {
        name: "Feedback",
        include: [
          "src/components/alert/Alert.tsx",
          "src/components/alert-title/AlertTitle.tsx",
          "src/components/circular-progress/CircularProgress.tsx",
          "src/components/progress/Progress.tsx",
          "src/components/skeleton/Skeleton.tsx",
          "src/components/skeleton-circle/SkeletonCircle.tsx",
          "src/components/skeleton-text/SkeletonText.tsx",
          "src/components/spinner/Spinner.tsx",
        ],
      },
      {
        name: "Typography",
        include: [
          "src/components/text/Text.tsx",
          "src/components/heading/Heading.tsx",
        ],
      },
      {
        name: "Media and icons",
        include: [
          "src/components/avatar/Avatar.tsx",
          "src/components/icon/Icon.tsx",
          "src/components/image/Image.tsx",
        ],
      },
      {
        name: "Other",
        include: ["src/components/close-button/CloseButton.tsx"],
      },
    ],
    wrapper: "src/UXPinWrapper.tsx",
    webpackConfig: "uxpin.webpack.config.js",
  },
  name: "merge-chakra-ui",
};
