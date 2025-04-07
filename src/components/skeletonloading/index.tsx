import { Skeleton } from "antd";
import { SkeletonContainer, SkeletonParagraph } from "./styles";

export function SkeletonLoading() {
  return (
    <SkeletonContainer>
      <Skeleton.Image active={true} style={{ backgroundColor: '#fff', borderRadius: '50%', width: '130px', height: '130px' }} />
      <SkeletonParagraph>
        <Skeleton.Button active={true} size="small" style={{ backgroundColor: '#fff', width: '300px' }} />
        <Skeleton.Input active={true} size="small" style={{ backgroundColor: '#fff', width: '800px' }} />
        <Skeleton.Input active={true} size="small" style={{ backgroundColor: '#fff', width: '800px' }} />
        <Skeleton.Input active={true} size="small" style={{ backgroundColor: '#fff', width: '800px' }} />
      </SkeletonParagraph>

    </SkeletonContainer>
  );
}