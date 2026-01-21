const CustomIcon = ({
  iconType,
  className,
  fill = "currentColor",
  width,
  height,
}) => {
  let svgContent;

  if (iconType === "car") {
    svgContent = (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 448 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_147_38)">
          <path
            d="M424.024 26.4232C380.166 17.0665 236.454 -5.3674 205.666 1.17121C169.268 9.59383 16.2313 64.7366 15.2988 65.6707C11.5689 67.5389 2.22833 71.2753 3.16081 81.566C4.09328 89.0387 4.09328 95.5932 1.29585 102.132C-0.569102 106.802 -0.569102 111.473 2.22833 115.225C6.89072 122.698 19.0287 126.45 25.5561 126.45H58.2244C56.3594 120.845 55.4269 114.291 55.4269 107.752C55.4269 75.0274 81.5521 48.8572 114.22 48.8572C146.889 48.8572 173.014 75.0274 173.014 107.752C173.014 114.291 172.081 120.845 170.216 126.45H307.385C305.521 120.845 304.588 114.291 304.588 107.752C304.588 75.0274 330.713 48.8572 363.382 48.8572C396.05 48.8572 422.175 75.0274 422.175 107.752C424.972 106.818 426.837 104.95 428.702 104.016C435.23 101.214 439.908 95.609 442.705 89.0546C452.963 61.9502 449.233 32.0278 424.04 26.4232H424.024ZM143.143 40.4345C173.931 30.1596 201.004 21.737 209.396 19.8688C217.789 18.0006 242.065 19.8688 271.92 22.671C247.66 35.7641 200.072 53.5118 143.143 40.4345Z"
            fill={fill}
          />
          <path
            d="M363.366 147C385.528 147 403.494 129.003 403.494 106.803C403.494 84.6025 385.528 66.6055 363.366 66.6055C341.204 66.6055 323.238 84.6025 323.238 106.803C323.238 129.003 341.204 147 363.366 147Z"
            fill={fill}
          />
          <path
            d="M114.22 147C136.383 147 154.349 129.003 154.349 106.803C154.349 84.6025 136.383 66.6055 114.22 66.6055C92.0583 66.6055 74.0923 84.6025 74.0923 106.803C74.0923 129.003 92.0583 147 114.22 147Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_147_38">
            <rect width="448" height="147" fill={fill} />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "search") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13_499)">
          <path
            d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8035 15.8035L21 21"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_499">
            <rect width="24" height="24" fill={fill} />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "youtube") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0494 6.95286C20.328 7.24147 20.526 7.59885 20.6232 7.98889C20.8827 9.43428 21.0087 10.9007 20.9995 12.3694C21.0047 13.8161 20.8787 15.2604 20.6232 16.6841C20.526 17.0742 20.328 17.4315 20.0494 17.7202C19.7707 18.0088 19.4211 18.2183 19.036 18.3278C17.6288 18.7059 12 18.7059 12 18.7059C12 18.7059 6.3712 18.7059 4.964 18.3278C4.58669 18.2241 4.24238 18.0244 3.96435 17.748C3.68632 17.4716 3.48395 17.1278 3.37681 16.7499C3.11727 15.3045 2.99129 13.8381 3.00047 12.3694C2.9933 10.9117 3.11927 9.45636 3.37681 8.02177C3.474 7.63172 3.67193 7.27435 3.95061 6.98574C4.22929 6.69713 4.57886 6.48751 4.964 6.37806C6.3712 6 12 6 12 6C12 6 17.6288 6 19.036 6.34518C19.4211 6.45464 19.7707 6.66426 20.0494 6.95286ZM14.8636 12.3696L10.1593 15.057V9.68208L14.8636 12.3696Z"
          fill={fill}
        />
      </svg>
    );
  } else if (iconType === "checkmark") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_401_1181)">
          <path
            d="M2.5 9L6 12.5L14 4.5"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_401_1181">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "plus") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_13_530)">
          <path
            d="M3.75 12H20.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3.75V20.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_530">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "minus") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_13_536)">
          <path
            d="M3.75 12H20.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_536">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "frown") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16"
          stroke={fill}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 9H9.01"
          stroke={fill}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 9H15.01"
          stroke={fill}
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (iconType === "meh") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15H16"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9H9.01"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9H15.01"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (iconType === "smile") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9H9.01"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9H15.01"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (iconType === "chevron-right") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_444_565)">
          <path
            d="M4.5 2.25L8.25 6L4.5 9.75"
            stroke={fill}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_444_565">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "path") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_444_496)">
          <path
            d="M18.75 21C19.9926 21 21 19.9926 21 18.75C21 17.5074 19.9926 16.5 18.75 16.5C17.5074 16.5 16.5 17.5074 16.5 18.75C16.5 19.9926 17.5074 21 18.75 21Z"
            fill={fill}
            stroke={fill}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 5.25H15.75C16.5456 5.25 17.3087 5.56607 17.8713 6.12868C18.4339 6.69129 18.75 7.45435 18.75 8.25C18.75 9.04565 18.4339 9.80871 17.8713 10.3713C17.3087 10.9339 16.5456 11.25 15.75 11.25H6.75C5.75544 11.25 4.80161 11.6451 4.09835 12.3483C3.39509 13.0516 3 14.0054 3 15C3 15.9946 3.39509 16.9484 4.09835 17.6517C4.80161 18.3549 5.75544 18.75 6.75 18.75H16.5"
            stroke={fill}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_444_496">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "bookmark") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_444_528)">
          <path
            d="M19.8982 3.11108H8.10185C6.85406 3.11108 5.83334 4.1318 5.83334 5.3796V24.8889L14 21.2592L22.1667 24.8889V5.3796C22.1667 4.1318 21.146 3.11108 19.8982 3.11108Z"
            fill={fill}
          />
          <path
            d="M14 9.66675V16.3334"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3333 13H10.6667"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_444_528">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "linkedin") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 2.001C3.99974 2.53143 3.78877 3.04004 3.41351 3.41492C3.03825 3.78981 2.52943 4.00027 1.999 4C1.46857 3.99974 0.959965 3.78877 0.585079 3.41351C0.210194 3.03825 -0.000264966 2.52943 2.50361e-07 1.999C0.000265467 1.46857 0.211233 0.959965 0.586494 0.585079C0.961754 0.210194 1.47057 -0.000264966 2.001 2.50361e-07C2.53143 0.000265467 3.04004 0.211233 3.41492 0.586494C3.78981 0.961754 4.00027 1.47057 4 2.001ZM4.06 5.481H0.0600002V18.001H4.06V5.481ZM10.38 5.481H6.4V18.001H10.34V11.431C10.34 7.771 15.11 7.431 15.11 11.431V18.001H19.06V10.071C19.06 3.901 12 4.131 10.34 7.161L10.38 5.481Z"
          fill={fill}
        />
      </svg>
    );
  } else if (iconType === "printer") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_444_288)">
          <path
            d="M22.5 9V16.5C22.5 16.6989 22.421 16.8897 22.2803 17.0303C22.1397 17.171 21.9489 17.25 21.75 17.25H18.75V20.25C18.75 20.4489 18.671 20.6397 18.5303 20.7803C18.3897 20.921 18.1989 21 18 21H6C5.80109 21 5.61032 20.921 5.46967 20.7803C5.32902 20.6397 5.25 20.4489 5.25 20.25V17.25H2.25C2.05109 17.25 1.86032 17.171 1.71967 17.0303C1.57902 16.8897 1.5 16.6989 1.5 16.5V9C1.5 7.75969 2.565 6.75 3.87469 6.75H5.25V3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3H18C18.1989 3 18.3897 3.07902 18.5303 3.21967C18.671 3.36032 18.75 3.55109 18.75 3.75V6.75H20.1253C21.435 6.75 22.5 7.75969 22.5 9ZM6.75 6.75H17.25V4.5H6.75V6.75ZM17.25 15H6.75V19.5H17.25V15ZM18.75 10.875C18.75 10.6525 18.684 10.435 18.5604 10.25C18.4368 10.065 18.2611 9.92078 18.0555 9.83564C17.85 9.75049 17.6238 9.72821 17.4055 9.77162C17.1873 9.81502 16.9868 9.92217 16.8295 10.0795C16.6722 10.2368 16.565 10.4373 16.5216 10.6555C16.4782 10.8738 16.5005 11.1 16.5856 11.3055C16.6708 11.5111 16.815 11.6868 17 11.8104C17.185 11.934 17.4025 12 17.625 12C17.9234 12 18.2095 11.8815 18.4205 11.6705C18.6315 11.4595 18.75 11.1734 18.75 10.875Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_444_288">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "twitter") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3579 6.8264L15.9314 0H13.4438L9.18971 5.2136L5.41571 0H0L6.31914 8.728L0.380476 16H2.86895L7.48729 10.344L11.5843 16H17L10.3579 6.8264ZM8.43119 9.1864L7.26143 7.5712L2.72 1.3016H4.59L8.25552 6.3552L9.42367 7.9712L14.2954 14.6984H12.4254L8.43119 9.1864Z"
          fill={fill}
        />
      </svg>
    );
  } else if (iconType === "facebook") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
          fill={fill}
        />
      </svg>
    );
  }

  return svgContent;
};
export default CustomIcon;
