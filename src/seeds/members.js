import mongoose from 'mongoose';

export default [
  {
    _id: new mongoose.Types.ObjectId('646f10810596acb1db833e25'),
    name: 'Pablo',
    lastName: 'Morad',
    dni: 40120964,
    phone: 3416762323,
    email: 'moradpablo@hotmail.com',
    city: 'rosario',
    dob: '1997-05-21',
    zip: 2000,
    isActive: true,
    membership: 'classic',
    password: 'Chimpance1',
    deleted: true,
  },
  {
    _id: new mongoose.Types.ObjectId('646f10810596acb1db833e30'),
    name: 'Hernan',
    lastName: 'Morad',
    dni: 40120963,
    phone: 3416762324,
    email: 'hernanmorad@hotmail.com',
    city: 'rosario',
    dob: '2001-05-21',
    zip: 2000,
    isActive: true,
    membership: 'only-classes',
    password: 'Gorila12',
    deleted: false,
  },
];
