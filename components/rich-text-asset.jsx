import Image from 'next/image'

import markdownStyles from './markdown-styles.module.css'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)
  console.log(asset.width)
  

  if (asset?.url) {

    return (
      // <div className={markdownStyles['markdown']} style={{position:'relative',
      // height: 'auto',
      // width: 'auto'
      // // minWidth: '100%',
      // // maxWidth: '100%',
      // // minHeight: '100%',
      // // maxHeight: '100%'
      // }} >
      <div>
        <Image src={asset.url} alt={asset.description} layout='responsive' width={asset.width} height={asset.height}/>
      </div>
    )
  }

  return null
}
