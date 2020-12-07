import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 0.1);
  align-content: center;

  position: fixed;

  z-index: 99999;
`;
