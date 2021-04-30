import { CSSProperties } from 'react';

export const defaultInputWrapperStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    alignItems: 'stretch',
    width: '100%'
};

export const defaultInputStyle: CSSProperties = {
    display: 'block',
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: '0',
    paddingTop: '.375rem',
    paddingBottom: '.375rem',
    paddingRight: '.75rem',
    paddingLeft: '.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    boxSizing: 'border-box',
    margin: '0',
    fontFamily: 'inherit',
    outline: 'transparent'
};

export const defaultHelperTextStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    marginTop: '.25rem',
    fontSize: '80%',
    boxSizing: 'border-box',
    fontStyle: 'italic',
    fontWeight: 'normal'
};

export const defaultValidStyle: CSSProperties = {
    border: '1px solid #28a745',
    paddingRight: 'calc(1.5em + .75rem)',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right calc(.375em + .1875rem) center',
    backgroundSize: 'calc(.75em + .375rem) calc(.75em + .375rem)',
    backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")"
};

export const defaultInvalidStyle: CSSProperties = {
    ...defaultValidStyle,
    border: '1px solid #eb5765',
    backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\")"
};

export const defaultValidFeedbackStyle: CSSProperties = {
    display: 'block',
    color: '#28a745',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '.25rem',
    fontSize: '80%'
};

export const defaultInvalidFeedbackStyle: CSSProperties = {
    ...defaultValidFeedbackStyle,
    color: '#eb5765'
};

export const defaultLabelStyle: CSSProperties = {
    display: 'inline-block',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '.5rem'
};

//text area: height: auto; overflow: auto; resize: vertical;
