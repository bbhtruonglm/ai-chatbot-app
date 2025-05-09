'use client';

import Link from 'next/link';
import React from 'react';
import styles from './GradientCard.module.scss';

// Import SCSS file
interface BtnProps {
  /**
   * Nội dung của button
   */
  content: string;
  /**
   * Kích thước của border
   */
  border_size?: string;
  /**
   * Ẩn icon
   */
  hide_icon?: boolean;
  /**
   * Link
   */
  href?: string;
  /**
   * target
   */
  target?: string;
  /**
   * onClick
   */
  onClick?: () => void;
}
const GradientCardStatic = ({
  content,
  border_size = 'small',
  hide_icon = false,
  href = '/chat/oauth',
  target = '_self',
  onClick,
}: BtnProps) => {
  /**
   * Xử lý sự kiện click
   * @param event - Sự kiện click
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // if (onClick) {
    //   /** Ngăn điều hướng mặc định */
    //   event.preventDefault()
    //   /** Gọi hàm onClick */
    //   onClick()
    // }
  };
  return (
    <Link
      href={href}
      className=" flex justify-center items-center z-10"
      target={target}
      /** Thay thế logic onClick */
      onClick={handleClick}
    >
      <div className={styles.card}>
        <div
          className={`flex items-center gap-1  bg-black text-white rounded-full py-1.5 px-3.5 ${border_size === 'small' ? 'text-sm' : ''} z-10`}
        >
          <p className="flex truncate">{content ? content : 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
};

export default GradientCardStatic;
