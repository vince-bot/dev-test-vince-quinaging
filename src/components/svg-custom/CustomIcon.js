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
  } else if (iconType === "calendar") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 1.5H14.25V0.75C14.25 0.551088 14.171 0.360322 14.0303 0.21967C13.8897 0.0790176 13.6989 0 13.5 0C13.3011 0 13.1103 0.0790176 12.9697 0.21967C12.829 0.360322 12.75 0.551088 12.75 0.75V1.5H5.25V0.75C5.25 0.551088 5.17098 0.360322 5.03033 0.21967C4.88968 0.0790176 4.69891 0 4.5 0C4.30109 0 4.11032 0.0790176 3.96967 0.21967C3.82902 0.360322 3.75 0.551088 3.75 0.75V1.5H1.5C1.10218 1.5 0.720644 1.65804 0.43934 1.93934C0.158035 2.22064 0 2.60218 0 3V18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H16.5C16.8978 19.5 17.2794 19.342 17.5607 19.0607C17.842 18.7794 18 18.3978 18 18V3C18 2.60218 17.842 2.22064 17.5607 1.93934C17.2794 1.65804 16.8978 1.5 16.5 1.5ZM16.5 6H1.5V3H3.75V3.75C3.75 3.94891 3.82902 4.13968 3.96967 4.28033C4.11032 4.42098 4.30109 4.5 4.5 4.5C4.69891 4.5 4.88968 4.42098 5.03033 4.28033C5.17098 4.13968 5.25 3.94891 5.25 3.75V3H12.75V3.75C12.75 3.94891 12.829 4.13968 12.9697 4.28033C13.1103 4.42098 13.3011 4.5 13.5 4.5C13.6989 4.5 13.8897 4.42098 14.0303 4.28033C14.171 4.13968 14.25 3.94891 14.25 3.75V3H16.5V6Z"
          fill={fill}
          fillOpacity="0.9"
        />
      </svg>
    );
  } else if (iconType === "clock") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM15 10.5H9.75C9.55109 10.5 9.36033 10.421 9.21967 10.2803C9.07902 10.1397 9 9.94891 9 9.75V4.5C9 4.30109 9.07902 4.11032 9.21967 3.96967C9.36033 3.82902 9.55109 3.75 9.75 3.75C9.94892 3.75 10.1397 3.82902 10.2803 3.96967C10.421 4.11032 10.5 4.30109 10.5 4.5V9H15C15.1989 9 15.3897 9.07902 15.5303 9.21967C15.671 9.36032 15.75 9.55109 15.75 9.75C15.75 9.94891 15.671 10.1397 15.5303 10.2803C15.3897 10.421 15.1989 10.5 15 10.5Z"
          fill={fill}
          fillOpacity="0.9"
        />
      </svg>
    );
  } else if (iconType === "user-circle") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        fillOpacity="0.9"
      >
        <path
          d="M10 0C7.34874 0.00296443 4.80693 1.05748 2.93221 2.93221C1.05748 4.80693 0.00296443 7.34874 0 10C0.00444216 12.6508 1.05944 15.1918 2.93384 17.0662C4.80824 18.9406 7.3492 19.9956 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM16.0824 15.7704C15.5208 14.6376 14.6538 13.6843 13.5792 13.018C12.5046 12.3518 11.2652 11.9991 10.0008 11.9998C8.73644 12.0004 7.49741 12.3544 6.42353 13.0218C5.34964 13.6892 4.48363 14.6434 3.9232 15.7768C2.42793 14.226 1.59475 12.1542 1.6 10C1.6 7.77218 2.485 5.63561 4.0603 4.0603C5.63561 2.485 7.77218 1.6 10 1.6C12.2278 1.6 14.3644 2.485 15.9397 4.0603C17.515 5.63561 18.4 7.77218 18.4 10C18.405 12.1512 17.574 14.2203 16.0824 15.7704ZM10 4C9.28799 4 8.59196 4.21114 7.99995 4.60671C7.40793 5.00228 6.94651 5.56453 6.67403 6.22234C6.40156 6.88015 6.33027 7.60399 6.46917 8.30233C6.60808 9.00066 6.95095 9.64212 7.45442 10.1456C7.95789 10.6491 8.59934 10.9919 9.29768 11.1308C9.99601 11.2697 10.7198 11.1984 11.3777 10.926C12.0355 10.6535 12.5977 10.1921 12.9933 9.60005C13.3889 9.00804 13.6 8.31201 13.6 7.6C13.6 7.12724 13.5069 6.65911 13.326 6.22234C13.145 5.78557 12.8799 5.38871 12.5456 5.05442C12.2113 4.72013 11.8144 4.45495 11.3777 4.27403C10.9409 4.09312 10.4728 4 10 4Z"
          fill={fill}
          fillOpacity="0.9"
        />
      </svg>
    );
  } else if (iconType === "play-button") {
    svgContent = (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 28C0 12.5611 12.5583 0 27.9964 0C43.4346 0 55.9928 12.5611 55.9928 28C55.9928 43.4389 43.4346 56 27.9964 56C12.5583 56 0 43.4389 0 28ZM22.7938 39.481L39.125 28.981C39.4577 28.7667 39.6604 28.3965 39.6604 28C39.6604 27.6035 39.4577 27.2331 39.125 27.019L22.7938 16.519C22.4361 16.2854 21.9736 16.2729 21.6045 16.4757C21.2285 16.6807 20.9961 17.0728 20.9961 17.5V38.5C20.9961 38.9272 21.2285 39.3192 21.6045 39.5243C21.7776 39.6188 21.9713 39.6667 22.1626 39.6667C22.3814 39.6667 22.6024 39.6051 22.7938 39.481Z"
          fill={fill}
        />
      </svg>
    );
  } else if (iconType === "close-icon") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13_546)">
          <path
            d="M18.75 5.25L5.25 18.75"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 18.75L5.25 5.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_546">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (iconType === "menu-icon") {
    svgContent = (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_13_571)">
          <path
            d="M9 12L20 12"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 6H20.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 18H20.25"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_13_571">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return svgContent;
};
export default CustomIcon;
