import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ColorRing
        visible="true"
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%)',
        }}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};
