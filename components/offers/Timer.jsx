import { useEffect, useState } from "react";
import Styled from "styled-components/native";

export const Timer = ({ offer }) => {
  const [timeLeft, setTimeLeft] = useState("");

  const getTimeLeft = () => {
    const end = new Date(offer.ending_date).getTime();
    const now = Date.now();
    const diff = end - now;

    if (diff <= 0) return "Expired";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <DiscountContainer>
      <StartDiscount>Start: {formatDate(offer.start_date)}</StartDiscount>
      <EndDiscount>End: {formatDate(offer.ending_date)}</EndDiscount>
      <Countdown>{timeLeft}</Countdown>
    </DiscountContainer>
  );
};

const DiscountContainer = Styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
    position: absolute;
    top: -50px;
`;
const StartDiscount = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
const EndDiscount = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const Countdown = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #d400ff;
  margin-top: 5px;
  border: 1px solid #8c00ff;
  padding: 5px;
  border-radius: 10px;
  width: 70%;
  text-align: center;
`;
