import { SharedInputProps } from './shared.props';
import { FCC } from '../../util';
interface SharedElementProps extends SharedInputProps {
    center?: boolean;
}
declare const SharedElement: FCC<SharedElementProps>;
export default SharedElement;
