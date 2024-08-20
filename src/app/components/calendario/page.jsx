import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const AgendaButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const OcupadoLabel = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: red;
`;

const CalendarioAgendamentos = () => {
  const [date, setDate] = useState(new Date());
  const [agendamentos, setAgendamentos] = useState({});

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAgendar = () => {
    const formattedDate = date.toISOString().split('T')[0];
    setAgendamentos({ ...agendamentos, [formattedDate]: true });
  };

  const isDateOcupado = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return agendamentos[formattedDate];
  };

  const renderTileContent = ({ date, view }) => {
    if (view === 'month' && isDateOcupado(date)) {
      return <OcupadoLabel>Ocupado</OcupadoLabel>;
    }
  };

  return (
    <Container>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={renderTileContent}
      />
      <AgendaButton
        onClick={handleAgendar}
        disabled={isDateOcupado(date)}
      >
        {isDateOcupado(date) ? 'Já Agendado' : 'Agendar Data'}
      </AgendaButton>
    </Container>
  );
};

export default CalendarioAgendamentos;
