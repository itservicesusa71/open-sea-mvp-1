import { ReactPlayer } from 'react-player';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": any;
        }
    }
}
const HlsVideoViewer: React.FC<{
    src: string;
}> = ({ src }) => (
    <ReactPlayer className='react-player'
        // This is the video address passed from the superior page
        url={src}
        playing
        width='100%'
        controls
        config={{
            file: {
                forceHLS: true,
            }
        }}
    />
);

export default HlsVideoViewer;
