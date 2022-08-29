import React, { useEffect, useRef, useState } from 'react';
import { connect } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import ContentWrapper from '../wrappers/ContentWrapper';
import BlockWrapper from '../wrappers/BlockWrapper';
import TextInput from '../inputs/TextInput';
import TextAreaInput from '../inputs/TextAreaInput';
import { validateInput } from '../../services/formValidation';
import ImageInput from '../inputs/ImageInput';
import DateInput from '../inputs/DateInput';
import TitleWrapper from '../wrappers/TitleWrapper';
import DoubleButton from '../buttons/DoubleButton';
import { createAuction } from '../../slices/auction';
import { Alert } from 'react-native';

const ItemFormView = ({ navigation, createAuction }) => {
    const toast = useToast();
    const productNameRef = useRef(null);
    const lotRef = useRef(null);
    const priceRef = useRef(null);
    const minIncrementRef = useRef(null);
    const minBidRef = useRef(null);
    const instagramRef = useRef(null);
    const facebookRef = useRef(null);
    const youtubeRef = useRef(null);
    const [loadingLeft, setLoadingLeft] = useState(false);
    const [loadingRight, setLoadingRight] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const [data, setData] = useState({
        files: [],
        product_name: '',
        lot: '',
        price: '',
        min_increment: '',
        min_bid: '',
        expiry_date: '',
        product_description: '',
        product_details: '',
        social_media_links: []
    });

    useEffect(() => { }, []);

    const onChange = (key, value) => {
        setFormErrors({
            ...formErrors,
            [key]: validateInput(key, value),
        });
        const tempData = { ...data };
        tempData[key] = value;
        setData(tempData);
    };

    const onChangeSocialLinks = (key, value) => {
        const tempData = { ...data };
        tempData['social_media_links'] = mergeArray(data.social_media_links, { key: key, value: value });
        setData(tempData);
    };

    function mergeArray(array, item) {
        const i = array.findIndex(_item => _item.key === item.key);
        if (i > -1) {
            array[i] = item;
        } else {
            array.push(item);
        }
        return array;
    }


    const handleUpload = (values, type) => {
        if (type == "live") {
            setLoadingLeft(true);
        }else{
            setLoadingRight(true);
        }
        let errors = [];
        for (var i in values) {
            onChange(i, values[i]);
            if (validateInput(i, values[i])) {
                errors = { ...errors, [i]: validateInput(i, values[i]) };
            }
        }
        if (errors.length != 0) {
            setFormErrors(errors);
            setLoadingLeft(false);
            return false;
        }
        createAuction(data).unwrap().then((res) => {
            if (type == "live") {
                navigation.push('Live',{ auction: res.data});
            }else{
                toast.show("Successfully uploaded");
            }
            setLoadingLeft(false);
            setLoadingRight(false);
        }).catch((err) => {
            setLoadingLeft(false);
            setLoadingRight(false);
        })
    };

    return (
        <ContentWrapper gutterX="wide" gutterY="wide">
            <ContentWrapper gutterX="none" gutterY="none">
                <BlockWrapper background="dark" paddingHorizontal={0} paddingVertical={5}>
                    <ImageInput
                        onChangeValue={(val) => onChange('files', val)}
                        error={formErrors['files']}
                    />
                </BlockWrapper>
                <TextInput
                    ref={productNameRef}
                    placeholder="Product name"
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        lotRef.current.focus();
                    }}
                    value={data.product_name}
                    onChangeText={val => onChange('product_name', val)}
                    error={formErrors['product_name']}
                />
                <TextInput
                    ref={lotRef}
                    placeholder="Lot#"
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        priceRef.current.focus();
                    }}
                    value={data.lot}
                    onChangeText={val => onChange('lot', val)}
                    error={formErrors['lot']}
                />
                <TextInput
                    keyboardType='numeric'
                    ref={priceRef}
                    placeholder="Price"
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        minIncrementRef.current.focus();
                    }}
                    value={data.price}
                    onChangeText={val => onChange('price', val)}
                    error={formErrors['price']}
                />
                <TextInput
                    ref={minIncrementRef}
                    placeholder="Min. Increment"
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        minBidRef.current.focus();
                    }}
                    value={data.min_increment}
                    onChangeText={val => onChange('min_increment', val)}
                    error={formErrors['min_increment']}
                />
                <TextInput
                    ref={minBidRef}
                    placeholder="Min. Bid"
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        minBidRef.current.focus();
                    }}
                    value={data.min_bid}
                    onChangeText={val => onChange('min_bid', val)}
                    error={formErrors['min_bid']}
                />
                <DateInput
                    placeholderTextColor="gray"
                    textColor="light"
                    value={new Date(data.expiry_date)}
                    onChangeText={val => onChange('expiry_date', val)}
                    error={formErrors['expiry_date']}
                />
                <BlockWrapper background="dark" paddingHorizontal={0} paddingVertical={0}>
                    <TextAreaInput
                        placeholderTextColor="gray"
                        textColor="light"
                        placeholder={"Product Description"}
                        value={data.product_description}
                        onChangeText={(val) => onChange('product_description', val)}
                    />
                </BlockWrapper>
                <BlockWrapper background="dark" paddingHorizontal={0} paddingVertical={10}>
                    <TextAreaInput
                        placeholderTextColor="gray"
                        textColor="light"
                        placeholder={"Product Details"}
                        value={data.product_details}
                        onChangeText={(val) => onChange('product_details', val)}
                    />
                </BlockWrapper>
                <TitleWrapper title="Social Media Links">
                    <TextInput
                        ref={instagramRef}
                        placeholder="htttps://instagram.com/username"
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            facebookRef.current.focus();
                        }}
                        value={data.social_media_links['instagram']}
                        onChangeText={val => onChangeSocialLinks('instagram', val)}
                        error={formErrors['instagram']}
                    />
                    <TextInput
                        ref={facebookRef}
                        placeholder="htttps://facebook.com/username"
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            youtubeRef.current.focus();
                        }}
                        value={data.social_media_links['facebook']}
                        onChangeText={val => onChangeSocialLinks('facebook', val)}
                        error={formErrors['facebook']}
                    />
                    <TextInput
                        ref={youtubeRef}
                        placeholder="htttps://youtube.com/username"
                        returnKeyType={'next'}
                        value={data.social_media_links['youtube']}
                        onChangeText={val => onChangeSocialLinks('youtube', val)}
                        error={formErrors['youtube']}
                    />
                </TitleWrapper>
            </ContentWrapper>
            <DoubleButton loadingLeft={loadingLeft} loadingRight={loadingRight} titleLeft="Go Live" titleRight="Upload" actionLeft={() => handleUpload(data,'live')} actionRight={() => handleUpload(data, 'upload')} />
        </ContentWrapper>
    );
};

export default connect(null, { createAuction })(ItemFormView);