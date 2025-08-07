import Link from 'next/link';
import AnimatedLineLeft from './ui/animatedLineLeft';
import AnimatedLineRight from './ui/animatedLineRight';
import Welcome from './ui/welcome';
import Stats from './ui/stats';
import Future from './ui/future';

export default function Page() {
  return (
    <div className='m-0 p-0 w-full'>
      <AnimatedLineLeft/>
      <AnimatedLineRight/>
      <Welcome/>
      <Stats/>
      <Future/>
    </div>
  );
}
