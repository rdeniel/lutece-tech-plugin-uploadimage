
package fr.paris.lutece.plugins.uploadimage.service;

import fr.paris.lutece.portal.service.cache.AbstractCacheableService;

/**
 * Cache service for  upload image
 */
public final class UploadImageCacheService extends AbstractCacheableService
{
    private static final String CACHE_NAME = "uploadimage.uploadimageCacheService";
    private static UploadImageCacheService _instance = new UploadImageCacheService(  );

    /**
     * Private constructor
     */
    private UploadImageCacheService(  )
    {
        initCache(  );
    }

    /**
     * Get the instance of the service
     * @return The instance of the service
     */
    public static UploadImageCacheService getInstance(  )
    {
        return _instance;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String getName(  )
    {
        return CACHE_NAME;
    }
}
