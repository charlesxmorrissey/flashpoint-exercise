import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import config from 'config'

const { baseUrl } = config.api

export const useDiscover = (token) => {
  const [categories, setCategories] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])

  const fetchData = useCallback(async () => {
    const endpoints = [
      'browse/new-releases',
      'browse/featured-playlists',
      'browse/categories',
    ]

    const requests = endpoints.map((endpoint) =>
      axios.get(`${baseUrl}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    )

    try {
      const responses = await Promise.all(requests)

      setNewReleases(responses[0].data.albums.items)
      setPlaylists(responses[1].data.playlists.items)
      setCategories(responses[2].data.categories.items)
    } catch (error) {
      console.log('error::', error)
    }
  }, [token])

  useEffect(() => {
    if (token) {
      fetchData()
    }
  }, [fetchData, token])

  return { categories, newReleases, playlists }
}
