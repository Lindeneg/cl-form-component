import { FC } from 'react';
import { SharedInputProps } from './shared.props';
interface SharedElementProps extends SharedInputProps {
    center?: boolean;
}
declare const SharedElement: FC<SharedElementProps>;
export default SharedElement;
