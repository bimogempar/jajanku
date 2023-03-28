import {StyleSheet} from 'react-native';

const primaryColorRGB = '68, 222, 223';
const secondaryColorRGB = '162, 239, 178';
const warningColorRGB = '250, 89, 29';
const textColorRGB = '96, 96, 96';
const blackColorRGB = '0, 0, 0';
const whiteColorRGB = '255, 255, 255';

const getAlpha = (rgbColor, alpha) => `rgba(${rgbColor}, ${alpha})`;

export const styleVariables = {
  primaryColor: getAlpha(primaryColorRGB, 1),
  primaryColorAlpha: alpha => getAlpha(primaryColorRGB, alpha),
  secondaryColor: getAlpha(secondaryColorRGB, 1),
  secondaryColorAlpha: alpha => getAlpha(secondaryColorRGB, alpha),
  warningColor: getAlpha(warningColorRGB, 1),
  warningColorAlpha: alpha => getAlpha(warningColorRGB, alpha),
  blackColor: getAlpha(blackColorRGB, 1),
  blackColorAlpha: alpha => getAlpha(blackColorRGB, alpha),
  textColor: getAlpha(textColorRGB, 1),
  textColorAlpha: alpha => getAlpha(textColorRGB, alpha),
  whiteColor: getAlpha(whiteColorRGB, 1),
  whiteColorAlpha: alpha => getAlpha(whiteColorRGB, alpha),
  lightColor: '#f5f5f5',
  mutedColor: '#cdcdcd',
  borderRadiusRound: 999,
  borderRadiusExtraLg: 32,
  borderRadiusLg: 14,
  borderRadiusMd: 8,
  borderRadiusSm: 4,
};

export const globalStyles = StyleSheet.create({
  fullFlex: {flex: 1},
  text: {
    fontSize: 14,
    color: styleVariables.textColor,
  },
  textMuted: {
    color: styleVariables.mutedColor,
  },
  textBold: {
    fontSize: 14,
    color: styleVariables.textColor,
    fontWeight: 'bold',
  },
  textWhite: {
    fontSize: 14,
    color: styleVariables.whiteColor,
  },
  textPrimary: {
    fontSize: 16,
    color: styleVariables.primaryColor,
    fontWeight: 'bold',
  },
  textHelper: {
    fontSize: 12,
    color: styleVariables.blackColorAlpha(0.45),
  },
  textWarning: {
    fontSize: 16,
    color: styleVariables.warningColor,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
    color: styleVariables.textColor,
  },
  sectionTitleWhite: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
    color: styleVariables.whiteColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: styleVariables.primaryColor,
    borderRadius: styleVariables.borderRadiusMd,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonOutline: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: styleVariables.borderRadiusMd,
    borderColor: styleVariables.primaryColor,
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderWidth: 1,
  },
  buttonText: {
    color: styleVariables.whiteColor,
    fontWeight: '700',
  },
  buttonOutlineText: {
    color: styleVariables.primaryColor,
    fontWeight: '700',
  },
  buttonStretched: {
    paddingVertical: 12,
    alignSelf: 'stretch',
    borderRadius: styleVariables.borderRadiusMd,
  },
  buttonCancelTheme: {
    backgroundColor: styleVariables.whiteColor,
    borderWidth: 1,
    borderColor: styleVariables.mutedColor,
  },
  buttonCancelTextTheme: {
    color: styleVariables.warningColor,
  },
  profileImgSize: {
    width: 42,
    height: 42,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
