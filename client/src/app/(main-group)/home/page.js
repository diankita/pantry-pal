'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import { setTopNavConfig } from '@/lib/features/navigation/navigationSlice';
export default function Page() {
  const dispatch = useAppDispatch();
  // const topNavConfig = useAppSelector(state => state.navigation.topNav);

  useEffect(() => {
    dispatch(
      setTopNavConfig({
        visible: true,
        title: 'Home',
        showBackButton: false,
      })
    );
  }, [dispatch]);

  return (
    <>
      <h1>this is home</h1>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
      <div>asdfsdfa</div>
    </>
  );
}
