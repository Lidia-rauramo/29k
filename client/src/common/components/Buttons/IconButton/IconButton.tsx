import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import {SPACINGS} from '../../../constants/spacings';
import {IconType} from '../../Icons';
import BaseButton, {BaseButtonProps} from '../BaseButton';

export type BaseIconButtonProps = BaseButtonProps & {
  noBackground?: boolean;
  fill?: string;
};

const StyledIconButton = styled(BaseButton)<BaseIconButtonProps>(props => ({
  ...(props.noBackground ? {backgroundColor: 'transparent'} : {}),
  width: props.small ? 36 : 44,
  padding: props.small ? 3 : 7,
  borderRadius: SPACINGS.SIXTEEN,
}));

type IconButtonProps = BaseIconButtonProps & {
  Icon: IconType;
};

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  variant,
  style,
  disabled,
  small,
  elevated,
  active,
  Icon,
  noBackground,
  fill,
}) => (
  <StyledIconButton
    onPress={onPress}
    disabled={disabled}
    variant={variant}
    style={style}
    active={active}
    small={small}
    elevated={elevated}
    noBackground={noBackground}>
    <Icon
      fill={
        fill
          ? fill
          : disabled || active || variant !== 'tertiary'
          ? COLORS.WHITE
          : COLORS.BLACK
      }
    />
  </StyledIconButton>
);

export default IconButton;
