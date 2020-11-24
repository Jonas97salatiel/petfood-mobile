import React, {
  useEffect,
  useRef,
  useState,
  forwardRef
} from 'react';

import styles from './style'

import { TextInput, Text } from 'react-native';
import { useField } from '@unform/core';
import { Ref } from 'yup';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {

    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (

    <>
      <TextInput

        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        className={error ? 'has-error' : ''}

        {...rest}
      />
      { error && <Text className="error" style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default forwardRef(Input);