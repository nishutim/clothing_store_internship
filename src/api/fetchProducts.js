export const fetchProducts = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data.map(child => {
    return {
      ...child,
      id: child._id.$oid,
    }
  })
}
