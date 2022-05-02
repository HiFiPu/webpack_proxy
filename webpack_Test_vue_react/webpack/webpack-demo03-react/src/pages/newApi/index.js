import React from 'react';
// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Demo01 = React.lazy(() => import('../newApi/contentApi/Demo01/app'));
export default function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        {/* <OtherComponent /> */}
        <Demo01></Demo01>
      </div>
    </React.Suspense>
  );
}

const Spinner = ()=>{
    return(
        <>
        <div>.......组件正在加载</div>
        </>
    )
}