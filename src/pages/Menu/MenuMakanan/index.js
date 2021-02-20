import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import Input from '../../../components'
import firestore from '@react-native-firebase/firestore';

const MenuMakanan = () => {

    const ref = firestore().collection('Foods');

    // const [form, setForm] = useState(
    //     {
    //         name: '',
    //         price: '',
    //         // deskripsi: ''
    //     }
    // );

    const [ food, setFood ] = useState('');
    const [ price, setPrice ] = useState('');

    async function addFood() {
        await ref.add({
          name: food,
          price: price,
          
        }).then(() => {
          console.log('Food added!');
        });
        setFood('');
      }

    // const sendData = () => {
    //     console.log(form);
    // }

    // const onInputChange = (value, input) => {
    //     setForm({
    //         ...form,
    //         [input]: value,
    //     });
    // };
    return (
        <View style={style.container}>
            <View >
                <View >
                    <Input
                        placeholder="Nama Makanan"
                        // value={form.name}
                        // onChangeText={value => onInputChange(value, 'name')}
                        value={food} onChangeText={setFood} />
                    <Input
                        placeholder="Price"
                        // value={form.price}
                        // onChangeText={value => onInputChange(value, 'price')}
                        value={price} onChangeText={setPrice} />
                    {/* <InputMultiline
                        value={form.deskripsi}
                        onChangeText={value => onInputChange(value)} /> */}
                    {/* <Button title='Input' onPress={addFood()}/> */}
                    {/* <Button title="Tambah" onPress={() => addFood()}></Button> */}
                    <TouchableOpacity style={style.btn} onPress={() => addFood()}>
                        <Text style={style.textbtn}>
                            Tambah
                        </Text>
                    </TouchableOpacity>                  
                </View>
            </View>
        </View>
    )
}

export default MenuMakanan

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    inputbutton: {
        marginBottom: 200
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'normal',
        marginTop: 110,
    },
    icon: {
        width: 200,
        height: 200,
    },
    header: {
        backgroundColor: '#337091',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50,
    },
    btn: {
        top: 30,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#337091',
        borderRadius: 25,
        backgroundColor: '#337091',
        justifyContent: 'center',
    },
    textbtn: {
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center'
    },


})
