import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
      <div>
          <Card borderRadius={10} overflow={'hidden'}>
              <Skeleton height='200px' width='300px'/>
              <CardBody>
                  <SkeletonText />
              </CardBody>
          </Card>
    </div>
  )
}

export default GameCardSkeleton