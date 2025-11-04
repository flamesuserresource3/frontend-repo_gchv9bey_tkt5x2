import Spline from '@splinetool/react-spline';

export default function Tumbler3D() {
  return (
    <div className="absolute inset-0">
      {/* Interactive 3D tumbler scene */}
      <Spline
        scene="https://prod.spline.design/6iS9mE7UZ5EKeosx/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
