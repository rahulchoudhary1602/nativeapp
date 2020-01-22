import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Dropdown } from 'react-native-material-dropdown'
export default function ReviewForm({ Addmovie }) {
    const [Rating, setrating] = useState({
        '1': 1, '2': 2, '3': 3, '4': 4, '5': 5
    })
    const reviewSchema = yup.object({
        title: yup.string()
            .required()
            .min(4),
        Content: yup.string()
            .required()
            .min(8),
        Rating: yup.string()
            .required()
            .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0;
            }),
    });
    return (



        <View >
            <Formik
                initialValues={{ title: '', Content: '', Rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values) => {
                    Addmovie(values)
                }}
            >
                {props => (
                    <View>
                        <View >
                            <TextInput
                                style={styles.form}
                                placeholder='Review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                style={styles.form}
                                multiline
                                placeholder='Review details'
                                onChangeText={props.handleChange('Content')}
                                value={props.values.Content}
                            />
                            <Text style={styles.error} >{props.touched.Content && props.errors.Content}</Text>
                            <TextInput
                                style={styles.form}
                                placeholder='Rating (1 - 5)'
                                onChangeText={props.handleChange('Rating')}
                                value={props.values.Rating}
                                keyboardType='numeric'
                            />
                            <Text style={styles.error}>{props.touched.Rating && props.errors.Rating}</Text>
                        </View>
                        <Button color='teal' title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>

    );
}

const styles = StyleSheet.create({
    form: {
        borderRadius: 5,
        backgroundColor: 'cornsilk',
        marginBottom: 10,
        padding: 10,
        borderColor: 'black',
        shadowRadius: 3,
        shadowOffset: { height: 2, width: 5 },
        shadowOpacity: .4
    },
    error: {
        color: 'red',
        fontSize: 10
    }
})
    // const [Rating, setrating] = useState({
    //     '1': 1, '2': 2, '3': 3, '4': 4, '5': 5
    // })
    // return (
    //     <View>
    //         <Formik
    //             initialValues={{ title: '', content: '', rating: '' }}
    //             onSubmit={values => console.log(values)}
    //         >
    //             {props => (
    //                 <View>

    //                     <TextInput
    //                         placeholder='Select an rating'
    //                         onChangeText={handleChange('title')}
    //                         value={values.title}
    //                     />
    //                     <TextInput
    //                         placeholder='Select an rating'
    //                         onChangeText={handleChange('content')}
    //                         value={values.content}
    //                     />
    //                     <Dropdown
    //                         label='Rate the Movie'
    //                         data={Rating}
    //                     />
    //                     <Button onPress={handleSubmit} title="Submit" />
    //                 </View>
    //             )}
    //         </Formik>
    //     </View>
    // )

