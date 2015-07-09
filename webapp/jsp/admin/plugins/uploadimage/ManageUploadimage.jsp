<%@ page errorPage="../../ErrorPage.jsp" %>

<jsp:include page="../../AdminHeader.jsp" />

<jsp:useBean id="manageuploadimage" scope="session" class="fr.paris.lutece.plugins.uploadimage.web.ManageUploadimageJspBean" />

<% manageuploadimage.init( request, manageuploadimage.RIGHT_MANAGEUPLOADIMAGE ); %>
<%= manageuploadimage.getManageUploadimageHome ( request ) %>

<%@ include file="../../AdminFooter.jsp" %>
