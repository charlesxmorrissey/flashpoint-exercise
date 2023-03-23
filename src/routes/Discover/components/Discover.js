import React from 'react'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock'
import config from 'config'
import { useAuth, useDiscover } from 'hooks'

import '../styles/_discover.scss'

const { authUrl, clientId, redirectUri, responseType } = config.api

const loginUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`

const Discover = () => {
  const { token } = useAuth()
  const { categories, newReleases, playlists } = useDiscover(token)

  return (
    <div className='discover'>
      {!token ? (
        <a href={loginUrl}>Login to Spotify</a>
      ) : (
        <>
          <DiscoverBlock
            text='RELEASED THIS WEEK'
            id='released'
            data={newReleases}
          />

          <DiscoverBlock
            text='FEATURED PLAYLISTS'
            id='featured'
            data={playlists}
          />

          <DiscoverBlock
            text='BROWSE'
            id='browse'
            data={categories}
            imagesKey='icons'
          />
        </>
      )}
    </div>
  )
}

export default Discover
