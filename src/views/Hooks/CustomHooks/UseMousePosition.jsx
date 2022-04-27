import React from 'react';
import { useMousePosition } from 'utils/hooks';

export default function UseMousePositionDemo() {
  const [x, y] = useMousePosition();
  return <div style={{ height: 'calc(100vh - 160px)', background: '#f90' }}>
    useMousePosition
    鼠标的位置是{x}, {y}
  </div>
}
