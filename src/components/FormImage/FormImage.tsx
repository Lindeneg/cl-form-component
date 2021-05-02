import React, { FC, useState, useRef, useEffect } from 'react';

import FormButton from '../FormButton/FormButton';
import SharedElement, { SharedInputProps } from '../SharedElement';
import { negateVariant, getVariantChild } from '../../util';

export type FormImageMetaProps = {
    onImageUpload?: (id: string, file: File) => void;
    onInvalidImageUpload?: (id: string, noValidation: boolean) => void;
    ImagepreviewText?: string;
    ImagebuttonText?: string;
    center?: boolean;
};

export interface FormImageProps extends SharedInputProps, FormImageMetaProps {}

const FormImage: FC<FormImageProps> = (props) => {
    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<string>();

    const ref = useRef<HTMLInputElement>(null);

    const variant = props.variant || 'light';

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
        props.onInvalidImageUpload &&
            props.onInvalidImageUpload(props.id, props.noValidation === true);
    };

    const onImageChosenHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (
            event.target.files &&
            event.target.files.length > 0 &&
            /^image\/png|jpg|jpeg$/.test(event.target.files[0].type)
        ) {
            const file = event.target.files[0];
            setFile(file);
            props.onImageUpload && props.onImageUpload(props.id, file);
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
                        width: '13rem',
                        height: 'auto',
                        marginBottom: '1rem'
                    }}
                >
                    {preview && (
                        <img
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                            src={preview}
                            alt="Preview"
                        />
                    )}
                    {!preview && (
                        <p style={{ ...getVariantChild(negateVariant(variant), 'tc') }}>
                            {props.ImagepreviewText || 'Please choose an image.'}
                        </p>
                    )}
                </div>
                <FormButton
                    variant={negateVariant(variant)}
                    buttonText={props.ImagebuttonText ? props.ImagebuttonText : 'UPLOAD'}
                    type="button"
                    onClick={onImageUploadHandler}
                />
            </div>
        </SharedElement>
    );
};

export default FormImage;
