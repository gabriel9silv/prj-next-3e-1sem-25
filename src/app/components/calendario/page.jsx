import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../calendario/page.module.css'; // Importa o arquivo CSS

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const renderDayCell = (info) => {
    const date = info.date.toISOString().split('T')[0];
    const isSelected = date === selectedDate;

    return (
      <div
        className={`fc-daygrid-day${isSelected ? ' selected-date' : ''}`}
        onClick={() => handleDateClick(info.date)}
      >
        {info.dayNumberText}
      </div>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Evento 1', date: '2024-08-01' },
          { title: 'Evento 2', date: '2024-08-05' },
          { title: 'LAB5', date: '2024-08-20' },
        ]}
        dateClick={handleDateClick}
        dayCellContent={renderDayCell}
      />
      {selectedDate && (
        <div style={{ marginTop: '20px' }}>
          <h3>Data Selecionada: {selectedDate}</h3>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
