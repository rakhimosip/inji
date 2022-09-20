import React from 'react';
import { Button, Column, Text, Centered } from '../../components/ui';
import { Icon } from 'react-native-elements';
import { Theme } from '../../components/ui/styleUtils';
import { RefreshControl } from 'react-native';
import { useMyVcsTab } from './MyVcsTabController';
import { HomeScreenTabProps } from './HomeScreen';
import { AddVcModal } from './MyVcs/AddVcModal';
import { GetVcModal } from './MyVcs/GetVcModal';
import { DownloadingVcModal } from './MyVcs/DownloadingVcModal';
import { OnboardingOverlay } from './OnboardingOverlay';
import { useTranslation } from 'react-i18next';
import GestureRecognizer from 'react-native-swipe-gestures';
import { VcItem } from '../../components/VcItem';
import { GET_INDIVIDUAL_ID } from '../../shared/constants';

export const MyVcsTab: React.FC<HomeScreenTabProps> = (props) => {
  const { t } = useTranslation('MyVcsTab');
  const controller = useMyVcsTab(props);

  const getId = () => {
    controller.DISMISS();
    controller.GET_VC();
  };

  const clearIndividualId = () => {
    GET_INDIVIDUAL_ID('');
  };

  return (
    <React.Fragment>
      <Column fill style={{ display: props.isVisible ? 'flex' : 'none' }}>
        <Column fill pY={32} pX={24}>
          {controller.vcKeys.length > 0 && (
            <React.Fragment>
              <Column
                scroll
                margin="0 0 20 0"
                refreshControl={
                  <RefreshControl
                    refreshing={controller.isRefreshingVcs}
                    onRefresh={controller.REFRESH}
                  />
                }>
                {controller.vcKeys.map((vcKey) => (
                  <VcItem
                    key={vcKey}
                    vcKey={vcKey}
                    margin="0 2 8 2"
                    onPress={controller.VIEW_VC}
                  />
                ))}
                <GestureRecognizer onSwipeLeft={props.onSwipe}>
                  <Column elevation={2} margin="10 2 0 2">
                    <Button
                      type="clear"
                      disabled={controller.isRefreshingVcs}
                      title={t('addVcButton', {
                        vcLabel: controller.vcLabel.singular,
                      })}
                      onPress={controller.ADD_VC}
                    />
                  </Column>
                </GestureRecognizer>
              </Column>
            </React.Fragment>
          )}
          {controller.vcKeys.length === 0 && (
            <React.Fragment>
              <Centered fill>
                <Text weight="semibold" margin="0 0 8 0">
                  {t('generateVc', { vcLabel: controller.vcLabel.plural })}
                </Text>
                <Text color={Theme.Colors.textLabel} align="center">
                  {t('generateVcDescription', {
                    vcLabel: controller.vcLabel.singular,
                  })}
                </Text>
                <Icon
                  name="arrow-downward"
                  containerStyle={{ marginTop: 20 }}
                  color={Theme.Colors.Icon}
                />
              </Centered>

              <GestureRecognizer onSwipeLeft={props.onSwipe}>
                <Button
                  type="addId"
                  disabled={controller.isRefreshingVcs}
                  title={t('addVcButton', {
                    vcLabel: controller.vcLabel.singular,
                  })}
                  onPress={controller.ADD_VC}
                />
              </GestureRecognizer>
            </React.Fragment>
          )}
        </Column>
      </Column>

      {controller.AddVcModalService && (
        <AddVcModal service={controller.AddVcModalService} onPress={getId} />
      )}

      {controller.GetVcModalService && (
        <GetVcModal service={controller.GetVcModalService} />
      )}

      {controller.isRequestSuccessful && (
        <DownloadingVcModal
          isVisible={controller.isRequestSuccessful}
          onDismiss={controller.DISMISS}
          onShow={clearIndividualId}
        />
      )}

      <OnboardingOverlay
        isVisible={controller.isOnboarding}
        onDone={controller.ONBOARDING_DONE}
        onAddVc={controller.ADD_VC}
      />
    </React.Fragment>
  );
};
