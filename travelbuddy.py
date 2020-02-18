# The Yes
# You are building a social travel app.
# You are given two strings: 
# 1 string of the current user’s wishlist
# 1 string of other users wishlists
# Write a function that returns a list of potential travel buddies sorted by number of matches.

# Current user wishlist:
# “Amsterdam,Barcelona,London,Prague”

# User wishlists from CSV:
# “U1,Amsterdam,Barcelona,London,Prague\n
# U2,Shanghai,Hong Kong,Moscow,Sydney,Melbourne\n
# U3,London,Boston,Amsterdam,Madrid\n
# U4,Barcelona,Prague,London,Sydney,Moscow”

# Expected return value:
# [‘U1’, ‘U4’, ‘U3’]

def travelBuddy(currCities, wishlists):
	rows = wishlists.split(‘/n’)
	currCitiesList = currCities.split(‘,’)
	result = []
	for row in rows:
		rowList = row.split(‘,’)
		if hasCommonCities(currCitiesList, rowList[1:]):
			result.append(rowList[0])
	return result

def hasCommonCities(cities1): # takes in two lists of cities
	result = []
	cityMap = {
		cityName: [Users]
	}
	
	for city in cities1:
		results += cityMap[city] 
	return results
	
	
# note that with the above change, the row loop in the first function would be used to propagate the cityMap, and the return from the first function would be `return hasCommonCities(currCitiesList, cityMap)`, with the second function to reflect this new signature
