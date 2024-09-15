import React from "react";
import IconStonk from '../../assets/svg/IconStonk.svg';

interface Person {
    id: number;
    title: string;
    views: number | string;
    icon: string;
    percentage: string;
    color: string;
    borderColor: string;
  }

const personData: Person[] = [
    {
      id: 1,
      title: 'Views',
      views: 6789,
      icon: IconStonk, 
      percentage: "+11.01%",
      color: "#454545",
      borderColor: "#666666"
    },
    {
        id: 2,
        title: 'List Users',
        views: 1234,
        icon: IconStonk, 
        percentage: "+11.01%",
        color: "#454545",
        borderColor: "#666666"
    },
    {
        id: 3,
        title: 'Percent',
        views: '78%',
        icon: IconStonk, 
        percentage: "+5.55%",
        color: "#454545",
        borderColor: "#666666"
    },
  ];
  

  const PersonCard = ({ person }: { person: Person }) => {
    return (
      <div className="p-5 justify-center w-[250px]" style={{ backgroundColor: person.color, borderRadius: '30px' }}>
        <div className="flex justify-between items-center mb-3">
          <div className="text-white">{person.title}</div>
          <div className='border-2 p-[10px] rounded-full' style={{ borderColor: person.borderColor }}>
            <img src={person.icon} alt="icon" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-white text-[32px]">
            {typeof person.views === 'number' ? person.views.toLocaleString() : person.views}
          </div>
          <div className="text-white">{person.percentage}</div>
        </div>
      </div>
    );
  };
  
  // Render bảng dữ liệu
  const CardView = () => {
    return (
      <div className="flex gap-5">
        {personData.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    );
  };
  
  export default CardView;