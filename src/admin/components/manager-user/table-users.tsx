import React from 'react';
import imgAvatar from '../../assets/png/image_avatar.png'
import ItemUser from './item-user';

const data = [
  {image:'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png', name: 'Phạm Thanh Phúc' , email: 'phucpham21109@gmail.com', ordinal: '1234 ****', joinday: 'February 22th', status: true, action: 'View more'},
  {image:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid', name: 'Nguyễn Minh Nguyên' , email: 'minhnguynk98@gmail.com', ordinal: '1234 ****', joinday: 'April 15th', status: false, action: 'View more'},
  {image:'https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png', name: 'Elon Musk' , email: 'ElonMusk213@gmail.com', ordinal: '1234 ****', joinday: 'June 28th', status: true, action: 'View more'},
  {image:'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611713.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid', name: 'Lionel Méssiuuu' , email: 'm10_leo@gmail.com', ordinal: '1511 ****', joinday: 'June 24th', status: false, action: 'View more'},
  {image:'https://img.freepik.com/fotos-premium/icone-de-renderizacao-3d-de-avo-com-bone-de-desenho-animado-de-plastico-gerado-por-ia_1123300-991.jpg', name: 'Cristiano Ronaldo' , email: 'cr7_cristiano@gmail.com', ordinal: '1329 ****', joinday: 'February 5th', status: true, action: 'View more'},

];

function DataTable() {
  return (
    <table className='w-full'>
      <thead className=''>
        <tr className='border-b'>
          <th className='p-2 w-[30%] text-start'>Information</th>
          <th className='p-2 text-start'>Ordinal</th>
          <th className='p-2 text-start'>Join Date</th>
          <th className='p-2 text-start'>Status</th>
          <th className='p-2 text-start'>Action</th>
        </tr>
      </thead>
      <tbody >
        {data.map((person,key) => (
        <ItemUser person={person} key={key} />
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
