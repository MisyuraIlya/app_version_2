import React, { FC, ReactNode, MouseEvent } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container:FC<ContainerProps> = ({children}) => {
    return (
        <div className={'container'}>
            {children}
        </div>
    );
};

export default Container;