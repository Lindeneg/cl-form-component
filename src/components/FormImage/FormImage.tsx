import React, { FC, CSSProperties, useState, useRef, useEffect } from 'react';

import FormButton from '../FormButton/FormButton';
import SharedElement, { SharedInputProps } from '../SharedElement';
import { negateVariant } from '../../util';

export type FormImageMetaProps = {
    onUpload?: (id: string, file: File) => void;
    onInvalidUpload?: (id: string) => void;
    previewWrapperStyles?: CSSProperties;
    previewImageStyles?: CSSProperties;
    previewWrapperClassName?: string;
    previewImageClassName?: string;
    previewText?: string;
    buttonText?: string;
};

export interface FormImageProps extends SharedInputProps, FormImageMetaProps {}

const FormImage: FC<FormImageProps> = (props) => {
    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<string>();

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (typeof file !== 'undefined') {
            const fileReader: FileReader = new FileReader();
            fileReader.onload = () => {
                setPreview(fileReader.result?.toString());
            };
            fileReader.readAsDataURL(file);
        }
    }, [file]);

    const onInvalidUpload = (): void => {
        setPreview('');
        props.onInvalidUpload && props.onInvalidUpload(props.id);
    };

    const onImageChosenHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (
            event.target.files &&
            event.target.files.length > 0 &&
            /^image\/png|jpg|jpeg$/.test(event.target.files[0].type)
        ) {
            const file = event.target.files[0];
            setFile(file);
            props.onUpload && props.onUpload(props.id, file);
        } else {
            onInvalidUpload();
        }
    };

    const onImageUploadHandler = (): void => {
        ref.current && ref.current.click();
    };

    return (
        <SharedElement {...props}>
            <input
                ref={ref}
                id={props.id}
                type="file"
                style={{ display: 'none' }}
                accept=".jpg,.jpeg,.png"
                onChange={onImageChosenHandler}
            />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '256px',
                        height: 'auto',
                        marginBottom: '1rem',
                        ...props.previewWrapperStyles
                    }}
                    className={props.previewWrapperClassName}
                >
                    {preview && (
                        <img
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                ...props.previewImageStyles
                            }}
                            className={props.previewImageClassName}
                            src={preview}
                            alt="Preview"
                        />
                    )}
                    {!preview && <p>{props.previewText || 'Please choose an image.'}</p>}
                </div>
                <FormButton
                    variant={negateVariant(props.variant)}
                    buttonText={props.buttonText ? props.buttonText : 'UPLOAD'}
                    type="button"
                    onClick={onImageUploadHandler}
                />
            </div>
        </SharedElement>
    );
};

export default FormImage;
