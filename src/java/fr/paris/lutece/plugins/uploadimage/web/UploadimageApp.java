/*
 * Copyright (c) 2002-2020, City of Paris
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice
 *     and the following disclaimer.
 *
 *  2. Redistributions in binary form must reproduce the above copyright notice
 *     and the following disclaimer in the documentation and/or other materials
 *     provided with the distribution.
 *
 *  3. Neither the name of 'Mairie de Paris' nor 'Lutece' nor the names of its
 *     contributors may be used to endorse or promote products derived from
 *     this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * License 1.0
 */
package fr.paris.lutece.plugins.uploadimage.web;

import java.util.HashMap;
import java.util.Map;

import fr.paris.lutece.plugins.uploadimage.business.Options;
import fr.paris.lutece.plugins.uploadimage.business.OptionsHome;
import fr.paris.lutece.plugins.uploadimage.service.UploadImageCacheService;
import fr.paris.lutece.portal.web.xpages.XPage;
import fr.paris.lutece.portal.service.template.AppTemplateService;
import fr.paris.lutece.portal.util.mvc.xpage.MVCApplication;
import fr.paris.lutece.portal.util.mvc.commons.annotations.View;
import fr.paris.lutece.portal.util.mvc.xpage.annotations.Controller;
import fr.paris.lutece.util.html.HtmlTemplate;

import javax.servlet.http.HttpServletRequest;

/**
 * This class provides a simple implementation of an XPage
 */

@Controller( xpageName = "uploadimage", pageTitleI18nKey = "uploadimage.xpage.uploadimage.pageTitle", pagePathI18nKey = "uploadimage.xpage.uploadimage.pagePathLabel" )
public class UploadimageApp extends MVCApplication
{
    /**
	 * 
	 */
	private static final long serialVersionUID = -3163143189140667970L;
	private static final String TEMPLATE_XPAGE = "/skin/plugins/uploadimage/uploadimageXpage.html";
    // Templates
    private static final String TEMPLATE_MAIN_UPLOAD_IMAGE_JS = "skin/plugins/uploadimage/main.js";

    private static final String VIEW_HOME = "home";

    private static final String IDOPTION = "id_option";

    private static final String MARK_FIELDNAME = "fieldName";
    private static final String PARAMATER_FIELDNAME = "fieldName";

    /**
     * Returns the content of the page uploadimage.
     * 
     * @param request
     *            The HTTP request
     * @return The view
     */
    @View( value = VIEW_HOME, defaultView = true )
    public XPage viewHome( HttpServletRequest request )
    {
        Map<String, Object> model = new HashMap<>( );
        // model.put("main", getMainUploadJs(request));
        return getXPage( TEMPLATE_XPAGE, getLocale( request ), model );
    }

    public String getMainUploadJs( HttpServletRequest request )

    {

        // String nId = request.getParameter(IDOPTION);
        String strFieldname = request.getParameter( PARAMATER_FIELDNAME );
        Options option = new Options( );

        if ( strFieldname != null && !strFieldname.isEmpty( ) )
        {
            option = OptionsHome.findByFieldName( strFieldname );
        }
        else
        {
            option = getDefaultOption( );
        }
        if ( option == null )
        {
            option = getDefaultOption( );
        }

        String strKey = "clef";

        String strContent = (String) UploadImageCacheService.getInstance( ).getFromCache( strKey );

        // if ( strContent == null )
        // {
        Map<String, Object> model = new HashMap<>( );
        model.put( "MARK_BASE_URL", " strBaseUrl" );
        model.put( "option", option );
        model.put( MARK_FIELDNAME, strFieldname );

        HtmlTemplate template = AppTemplateService.getTemplate( TEMPLATE_MAIN_UPLOAD_IMAGE_JS, getLocale( request ), model );
        strContent = template.getHtml( );
        // UploadImageCacheService.getInstance( ).putInCache( strKey, strContent );
        // }

        return strContent;
    }

    private Options getDefaultOption( )
    {

        Options option = new Options( );

        option.setAutoCrop( true );
        option.setBackground( true );
        option.setCheckImageOrigin( true );
        option.setCropBoxMovable( true );
        option.setDoubleClickToggle( true );
        option.setDragCrop( true );
        option.setGuides( true );
        option.setHighlight( true );
        option.setModal( true );
        option.setMouseWheelZoom( true );
        option.setMovable( true );
        option.setResponsive( true );
        option.setRotatable( true );
        option.setStrict( true );
        option.setTouchDragZoom( true );
        option.setZoomable( true );
        option.setCropBoxResizable( true );

        option.setHeight( 576 );
        option.setWidth( 1024 );
        option.setX( 128 );
        option.setY( 72 );
        option.setRatio( "16/9" );
        option.setFieldName( "fieldName" );

        return option;

    }

}
