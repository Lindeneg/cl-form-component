import { FC } from 'react';
import { SharedInputProps } from './';
interface SharedElementProps extends SharedInputProps {
    center?: boolean;
}
declare const SharedElement: FC<SharedElementProps>;
export default SharedElement;
